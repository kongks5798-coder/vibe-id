"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Camera, X, Sparkles } from "lucide-react";

interface UploadZoneProps {
  onImageSelect: (imageUrl: string, file: File) => void;
}

export default function UploadZone({ onImageSelect }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreview(result);
      setSelectedFile(file);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleAnalyze = () => {
    if (preview && selectedFile) {
      onImageSelect(preview, selectedFile);
    }
  };

  const handleClear = () => {
    setPreview(null);
    setSelectedFile(null);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {!preview ? (
          <motion.div
            key="upload"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer
                ${isDragging
                  ? "border-[#171717] bg-[#171717]/5 scale-[1.02]"
                  : "border-gray-300 hover:border-[#171717] hover:bg-gray-50"
                }`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              <motion.div
                animate={{ y: isDragging ? -5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#171717] mb-6">
                  <Upload className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-medium tracking-tight mb-2">
                  Upload Your Photo
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Drag & drop or click to select
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Camera size={14} />
                    <span>Selfie recommended</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="text-xs text-gray-400">
                    JPG, PNG up to 10MB
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Preview Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />

              {/* Clear Button */}
              <button
                onClick={handleClear}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Analyze Button */}
            <motion.button
              onClick={handleAnalyze}
              className="w-full mt-6 py-4 bg-[#171717] text-white rounded-xl font-medium tracking-wide flex items-center justify-center gap-3 hover:bg-[#2a2a2a] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles size={20} />
              <span className="uppercase text-sm">Analyze My Aura</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
