import { createFileRoute } from "@tanstack/react-router";
import { ShopPage } from "@/components/shop/page";

export const Route = createFileRoute("/")({
  component: ShopPage,
});
