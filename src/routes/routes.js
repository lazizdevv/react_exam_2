import { nanoid } from "nanoid";
import { Home } from "../pages/home";
import { CreateProduct } from "../pages/create-product/create-product";
import { CategotyList } from "../pages/category-list/categoty-list";
import { CategoryProduct } from "../pages/category-product/category-product";
import { CreateCategory } from "../pages/create-category/create-category";
import { EditProduct } from "../pages/edit-product/edit-product";
import { EditCategory } from "../pages/edit-category/edit-category";
import { Profile } from "../pages/profile/profile";

export const routes = [
  {
    component: Home,
    id: nanoid(),
  },
  {
    component: CreateProduct,
    id: nanoid(),
    path: "create-product",
  },
  {
    component: CreateCategory,
    id: nanoid(),
    path: "create-category",
  },
  {
    component: CategotyList,
    id: nanoid(),
    path: "category-list",
  },
  {
    component: CategoryProduct,
    id: nanoid(),
    path: "category-product/:id",
  },
  {
    component: EditProduct,
    id: nanoid(),
    path: "edit-product/:id",
  },
  {
    component: EditCategory,
    id: nanoid(),
    path: "edit-category/:id",
  },
  {
    component: Profile,
    id: nanoid(),
    path: "profile",
  },
];
