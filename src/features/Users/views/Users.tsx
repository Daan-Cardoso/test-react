import Pagination from "../../../shared/components/Pagination";
import Table from "../../../shared/components/Table";
import UserCard from "../components/UserCard";
import { tPagination } from "../../../shared/components/Pagination/types";
import { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import UserDetails from "../modals/UserDetails";
import { tUser } from "../types";

const UserView = () => {
  const [pagination, setPagination] = useState<tPagination>({
    page: 1,
    limit: 5,
    totalPages: 1,
    totalItems: 0,
  });

  const [ userDetails, setUserDetails ] = useState<{ visible: boolean, user?: tUser }>({
    visible: false,
    user: undefined
  });

  const { users, loading } = useUsers(pagination);

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      totalItems: users.length,
      totalPages: Math.ceil(users.length / prev.limit),
    }));
  }, [users, pagination.limit]);

  const handleOpenUserDetails = (user: tUser) => {
    setUserDetails({
      visible: true,
      user
    });
  };

  const handleCloseUserDetails = () => {
    setUserDetails({
      visible: false,
      user: undefined
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Users ({pagination.totalItems})
      </h1>

      <Table.Root columns={["Name", "Email", "Phone"]}>
        {!loading ? (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onClick={() => handleOpenUserDetails(user)}
            />
          ))
        ) : (
          <Table.Empty colSpan={3}>
            Loading...
          </Table.Empty>
        )}
      </Table.Root>

      <Pagination.Footer
        totalItems={pagination.totalItems}
        itemsPerPageOptions={[1, 5, 10]}
        pagination={pagination}
        setPagination={setPagination}
      />

      <UserDetails
        user={userDetails.user}
        visible={userDetails.visible}
        onClose={handleCloseUserDetails}
      />
    </div>
  );
};

export default UserView;
