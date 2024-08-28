"use client"
import React, { useEffect, useState } from 'react';
import Cards from '../../../../components/ui/CardProduct';
import SkeletonCard from '../../../../components/ui/ProductSkeleton';

export default function ProductFetcher() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <SkeletonCard />
  if (error) return <p className='text-black'>Error: {error}</p>;

  return <Cards products={products} />;
}
