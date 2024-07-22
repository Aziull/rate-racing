import { useState, useEffect, useCallback } from 'react';

const useLazyLoad = <T,>(loadData: (offset: number, limit: number) => Promise<T[]>, limit: number) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);

  const loadMoreData = useCallback(async () => {

    setLoading(true);
    const newData = await loadData(offset, limit);
    setData(prevData => [...prevData, ...newData]);
    setOffset(prevOffset => prevOffset + limit);
    setLoading(false);
    if (newData.length < limit) {
      setHasMore(false);
    }
    
  }, [offset, limit]);

  useEffect(() => {
    loadMoreData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && hasMore && !loading) {
        loadMoreData();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  return { data, loading, hasMore };
};

export default useLazyLoad;
