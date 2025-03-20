import { createFileRoute } from "@tanstack/react-router";
import { router } from "../main";
import UserView from "../features/Users/views/Users";

export const Route = createFileRoute("/users")({
  component: RouteComponent,
  beforeLoad: () => {
    const isAuthenticated = JSON.parse(
      localStorage.getItem("isAuthenticated") || ""
    );

    if (!isAuthenticated) {
      router.navigate({
        to: "/",
      });
    }
  },
});

function RouteComponent() {
  return <UserView />;
}
