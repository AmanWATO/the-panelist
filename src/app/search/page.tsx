
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { colors, fonts } from "@/utils/theme";
import Image from "next/image";
import Link from "next/link";

interface SearchFilters {
  artist: string;
  theme: string;
  technique: string;
  colorPalette: string;
  mood: string;
  style: string;
}

interface ArtPiece {
  id: string;
  title: string;
  artist: string;
  image: string;
  theme: string;
  technique: string;
  colorPalette: string;
  mood: string;
  style: string;
  description: string;
}

// Mock data - replace with actual data fetching
const mockArtPieces: ArtPiece[] = [
  {
    id: "1",
    title: "Silent Contemplation",
    artist: "Anonymous",
    image: "/api/placeholder/400/300",
    theme: "nature",
    technique: "digital",
    colorPalette: "monochrome",
    mood: "peaceful",
    style: "minimalist",
    description: "A quiet moment in nature"
  },
  {
    id: "2",
    title: "Urban Solitude",
    artist: "Anonymous",
    image: "/api/placeholder/400/300",
    theme: "urban",
    technique: "ink",
    colorPalette: "warm",
    mood: "melancholic",
    style: "abstract",
    description: "Finding solitude in the city"
  },
  // Add more mock data...
];

const filterOptions = {
  artist: ["Anonymous", "Various"],
  theme: ["nature", "urban", "abstract", "portrait", "landscape"],
  technique: ["digital", "ink", "watercolor", "pencil", "mixed"],
  colorPalette: ["monochrome", "warm", "cool", "vibrant", "muted"],
  mood: ["peaceful", "melancholic", "energetic", "contemplative", "mysterious"],
  style: ["minimalist", "abstract", "realistic", "surreal", "geometric"]
};

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<SearchFilters>({
    artist: "",
    theme: "",
    technique: "",
    colorPalette: "",
    mood: "",
    style: ""
  });
  const [filteredResults, setFilteredResults] = useState<ArtPiece[]>(mockArtPieces);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const filtered = mockArtPieces.filter((piece) => {
      const matchesSearch = 
        piece.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        piece.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        piece.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilters = Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return piece[key as keyof ArtPiece] === value;
      });

      return matchesSearch && matchesFilters;
    });

    setFilteredResults(filtered);
  }, [searchQuery, filters]);

  const handleFilterChange = (filterType: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      artist: "",
      theme: "",
      technique: "",
      colorPalette: "",
      mood: "",
      style: ""
    });
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="min-h-screen pt-20">
      {/* Search Header */}
      <section className="py-12 px-4 sm:px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#2C1810]"
            style={{ fontFamily: fonts.heading }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Art
          </motion.h1>

          {/* Search Bar */}
          <motion.div
            className="relative max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8B2635] w-5 h-5" />
            <input
              type="text"
              placeholder="Search by title, artist, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#8B2635]/20 focus:border-[#8B2635] focus:outline-none text-[#2C1810] bg-white"
              style={{ fontFamily: fonts.body }}
            />
          </motion.div>

          {/* Filter Toggle */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white border border-[#8B2635]/20 px-6 py-3 rounded-full hover:border-[#8B2635] transition-all duration-300"
              style={{ fontFamily: fonts.button }}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-[#8B2635] text-white text-xs px-2 py-1 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Filters Panel */}
      {showFilters && (
        <motion.section
          className="py-8 px-4 sm:px-6 border-b border-[#8B2635]/10"
          style={{ backgroundColor: colors.card }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-[#2C1810]" style={{ fontFamily: fonts.heading }}>
                Filter Options
              </h3>
              <button
                onClick={clearFilters}
                className="text-[#8B2635] hover:text-[#A52A3A] transition-colors text-sm"
                style={{ fontFamily: fonts.body }}
              >
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(filterOptions).map(([filterType, options]) => (
                <div key={filterType}>
                  <label className="block text-sm font-medium text-[#2C1810] mb-2 capitalize" style={{ fontFamily: fonts.body }}>
                    {filterType}
                  </label>
                  <select
                    value={filters[filterType as keyof SearchFilters]}
                    onChange={(e) => handleFilterChange(filterType as keyof SearchFilters, e.target.value)}
                    className="w-full p-2 border border-[#8B2635]/20 rounded-lg focus:border-[#8B2635] focus:outline-none bg-white text-sm"
                    style={{ fontFamily: fonts.body }}
                  >
                    <option value="">All</option>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Results */}
      <section className="py-12 px-4 sm:px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <p className="text-[#6B5B4F]" style={{ fontFamily: fonts.body }}>
              {filteredResults.length} results found
            </p>
          </div>

          {filteredResults.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#6B5B4F] text-lg" style={{ fontFamily: fonts.body }}>
                No results found. Try adjusting your search or filters.
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredResults.map((piece, index) => (
                <motion.div
                  key={piece.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={piece.image}
                      alt={piece.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#2C1810] mb-2" style={{ fontFamily: fonts.heading }}>
                      {piece.title}
                    </h3>
                    <p className="text-[#8B2635] text-sm mb-2" style={{ fontFamily: fonts.body }}>
                      by {piece.artist}
                    </p>
                    <p className="text-[#6B5B4F] text-sm" style={{ fontFamily: fonts.body }}>
                      {piece.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      <span className="bg-[#D4A574]/20 text-[#2C1810] px-2 py-1 rounded-full text-xs">
                        {piece.mood}
                      </span>
                      <span className="bg-[#8B2635]/20 text-[#2C1810] px-2 py-1 rounded-full text-xs">
                        {piece.style}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default SearchPage;
