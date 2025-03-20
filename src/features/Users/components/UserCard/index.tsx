import Table from "../../../../shared/components/Table";
import { tUser } from "../../types";

interface UserCardProps {
  user: tUser;
  onClick?: () => void;
} 


const UserCard = ({ user, onClick }: UserCardProps) => {
  return (
    <Table.Item cells={[user.name, user.email, user.phone]} clickable onClick={onClick} />
  )
};

export default UserCard;