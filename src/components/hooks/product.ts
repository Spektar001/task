import React, { useCallback, useEffect, useState } from "react";
import { Data } from "../Types/types";
import axios, { AxiosError } from "axios";
import { ACCESS_KEY } from "../Key/key";

export const useProducts = () => {
  const [products, setProducts] = useState<Data[]>([]);
  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalItemOpen, setModalItemOpen] = useState(false);
  const [itemID, setItemID] = useState("");
  const [modalItem, setModalItem] = useState<Data>();
  const [pendingModal, setPendingModal] = useState(true);

  const fetchItems = useCallback(async () => {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${search}&client_id=${ACCESS_KEY}`
      );
      setProducts(response.data.results);
      console.log(response.data.results);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }, [search]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const fetchModalItem = useCallback(async () => {
    try {
      setError("");
      const response = await axios.get(
        `https://api.unsplash.com/photos/${itemID}?client_id=${ACCESS_KEY}`
      );
      setModalItem(response.data);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
      console.log("code - ", error.code);
    }
  }, [itemID]);

  useEffect(() => {
    fetchModalItem();
  }, [fetchModalItem]);

  return {
    loading,
    error,
    modalItem,
    products,
    setItemID,
    modalItemOpen,
    pendingModal,
    setModalItemOpen,
    setPendingModal,
    setSearch,
  };
};
