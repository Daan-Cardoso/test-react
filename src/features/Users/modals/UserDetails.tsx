import { tUser } from "../types";

interface UserDetailsProps {
  user?: tUser;
  visible: boolean;
  onClose: () => void;
}

const UserDetails = ({ user, visible, onClose }: UserDetailsProps) => {
  const formatUserForDisplay = (user?: tUser) => {
    if (!user) return {};

    return {
      Name: user.name,
      Email: user.email,
      Phone: user.phone,
      Website: user.website,
      Address: `${user.address.street}, ${user.address.suite}, ${user.address.city} - ${user.address.zipcode}`,
      Company: `${user.company.name}`,
    };
  };

  return (
    visible && (
      <div className="absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg md:w-[50%] mx-auto">
          <h2 className="text-xl font-bold mb-4">User Details</h2>

          <div className="grid md:grid-cols-2 gap-2">
            {Object.entries(formatUserForDisplay(user) || {}).map(
              ([key, value]) => (
                <div key={key}>
                  <span className="font-bold">{key}: </span>
                  <span>{value}</span>
                </div>
              )
            )}
          </div>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded-lg float-right mt-4"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default UserDetails;
