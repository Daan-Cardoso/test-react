import { useState, useEffect, useMemo } from "react";
import { tUser } from "../types";
import { tPagination } from "../../../shared/components/Pagination/types";

const useUsers = (pagination: tPagination) => {
  const [users, setUsers] = useState<tUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      })
      .catch(() => {
        setUsers([]);
      });

      setLoading(false);
  }, []);

  const paginatedUsers = useMemo(() => {
    const start = (pagination.page - 1) * pagination.limit;
    const end = start + pagination.limit;
    return users.slice(start, end);
  }, [users, pagination.page, pagination.limit]);

  return { users: paginatedUsers, loading };
};

export default useUsers;
