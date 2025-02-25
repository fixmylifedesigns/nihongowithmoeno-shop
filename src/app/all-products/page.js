"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, Filter, X } from "lucide-react";
import Link from "next/link";

const ITEMS_PER_PAGE = 9;

function AllProductsContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const collectionFilter = searchParams.get("collection") || "";

  useEffect(() => {
    setSelectedCollection(collectionFilter);
  }, [collectionFilter]);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await fetch("/api/printify/products", {
          cache: "no-store",
        });
        const data = await response.json();
        const visibleProducts = data.filter(
          (product) => product.visible === true
        );

        // Extract unique collections
        const uniqueCollections = [
          ...new Set(
            visibleProducts
              .flatMap((product) => product.tags || [])
              .filter((tag) => tag && tag.toLowerCase().includes("collection"))
          ),
        ];

        setCollections(uniqueCollections);
        setProducts(visibleProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Filter and sort products
  let filteredProducts = [...products];

  // Apply collection filter
  if (selectedCollection) {
    filteredProducts = filteredProducts.filter(
      (product) => product.tags && product.tags.includes(selectedCollection)
    );
  }

  // Apply sorting
  switch (sortBy) {
    case "price-low":
      filteredProducts.sort(
        (a, b) => a.variants[0].price - b.variants[0].price
      );
      break;
    case "price-high":
      filteredProducts.sort(
        (a, b) => b.variants[0].price - a.variants[0].price
      );
      break;
    case "title":
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "newest":
    default:
      // Assuming newer products have higher IDs or created_at timestamps
      filteredProducts.sort((a, b) => b.id.localeCompare(a.id));
      break;
  }

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleCollectionChange = (collection) => {
    setSelectedCollection(collection);
    router.push(collection ? `?collection=${collection}` : "");
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Shop All Products</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Discover our collection of Japan-inspired fashion and accessories.
      </p>

      {/* Filters and Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <button
          onClick={toggleFilters}
          className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border rounded-md"
        >
          <Filter className="w-4 h-4" />
          Filter & Sort
        </button>

        {/* Desktop Filters */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-gray-700">Filter by:</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCollectionChange("")}
              className={`px-3 py-1 text-sm rounded-full ${
                selectedCollection === ""
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              All
            </button>

            {collections.map((collection) => (
              <button
                key={collection}
                onClick={() => handleCollectionChange(collection)}
                className={`px-3 py-1 text-sm rounded-full ${
                  selectedCollection === collection
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {collection
                  .replace("collection:", "")
                  .replace("Collection", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Sort */}
        <div className="hidden md:block">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="px-3 py-2 bg-white border rounded-md"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price, low to high</option>
            <option value="price-high">Price, high to low</option>
            <option value="title">Alphabetically, A-Z</option>
          </select>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <div className="md:hidden fixed inset-0 bg-white z-50 p-4 overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Filter & Sort</h3>
              <button onClick={toggleFilters}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Collections</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCollectionChange("")}
                  className={`px-3 py-1 text-sm rounded-full ${
                    selectedCollection === ""
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>

                {collections.map((collection) => (
                  <button
                    key={collection}
                    onClick={() => handleCollectionChange(collection)}
                    className={`px-3 py-1 text-sm rounded-full ${
                      selectedCollection === collection
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {collection
                      .replace("collection:", "")
                      .replace("Collection", "")}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Sort By</h4>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="w-full px-3 py-2 bg-white border rounded-md"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price, low to high</option>
                <option value="price-high">Price, high to low</option>
                <option value="title">Alphabetically, A-Z</option>
              </select>
            </div>

            <button
              onClick={toggleFilters}
              className="w-full py-2 bg-blue-600 text-white rounded-md font-medium"
            >
              Apply Filters
            </button>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          // Loading skeleton
          Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 w-full bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 animate-pulse mb-2 w-3/4"></div>
                  <div className="h-6 bg-gray-200 animate-pulse mb-4 w-1/4"></div>
                  <div className="h-10 bg-gray-200 animate-pulse w-full"></div>
                </div>
              </div>
            ))
        ) : currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
              onClick={() => router.push(`/${product.id}`)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.images[0].src}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-lg font-medium text-gray-700 mb-4">
                  ${product.variants[0].price / 100}
                </p>
                <div className="mt-auto">
                  <button
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/all-products/${product.id}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-600">
            No products found. Try changing your filters.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-2">
          <button
            onClick={() =>
              router.push(
                `?page=${currentPage - 1}${
                  selectedCollection ? `&collection=${selectedCollection}` : ""
                }`
              )
            }
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() =>
                  router.push(
                    `?page=${page}${
                      selectedCollection
                        ? `&collection=${selectedCollection}`
                        : ""
                    }`
                  )
                }
                className={`px-3 py-1 rounded-lg ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              router.push(
                `?page=${currentPage + 1}${
                  selectedCollection ? `&collection=${selectedCollection}` : ""
                }`
              )
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

// Wrap with Suspense boundary
export default function AllProducts() {
  return (
    <Suspense
      fallback={
        <div className="text-lg text-center py-8">Loading products...</div>
      }
    >
      <AllProductsContent />
    </Suspense>
  );
}
