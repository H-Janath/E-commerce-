'use client';

import useBasketStore from '@/lib/store';
import { Product } from '@/sanity.types';
import React, { useEffect, useState } from 'react';

interface AddToBasketButtonProps {
  product: Product;
  disabled?: boolean;
}

function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const [isClient, setIsClient] = useState(false);

  // Check item count after verifying client-side rendering
  const itemCount = isClient ? getItemCount(product._id) : 0;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Decrement Button */}
      <button
        onClick={() => removeItem(product._id)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
          itemCount === 0
            ? 'bg-gray-100 cursor-not-allowed'
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
        disabled={itemCount === 0 || disabled}
      >
        <span
          className={`text-xl font-bold ${
            itemCount === 0 ? 'text-gray-200' : 'text-gray-600'
          }`}
        >
          -
        </span>
      </button>

      {/* Item Count */}
      <span className="w-8 text-center font-semibold">{itemCount}</span>

      {/* Increment Button */}
      <button
        onClick={() => addItem(product)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
          disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        disabled={disabled}
      >
        <span className="text-xl font-bold text-white">+</span>
      </button>
    </div>
  );
}

export default AddToBasketButton;
    