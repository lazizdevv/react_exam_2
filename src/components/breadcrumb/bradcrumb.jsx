import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Sarlavhalar ro'yxati
  const titles = {
    "create-product": "Новый товар",
    "create-category": "Создать категорию",
    "category-list": "Товары",
    "category-product": "Категория Продукты",
    "edit-product": "Редактировать продукт",
    "edit-category": "Изменить категорию",
    "profile": "Профиль",
  };

  // Hozirgi sahifa sarlavhasini olish
  const getTitle = (path) => {
    // Dinamik sarlavhalar uchun maxsus tekshiruv
    const key = path.split("/").pop(); // URLning oxirgi bo'lagi
    return titles[key] || "Not Found";
  };

  const pageTitle = pathnames.length ? getTitle(location.pathname) : "Главная";

  return (
    <div className="">
      <h1 className="text-lg font-extrabold capitalize">{pageTitle}</h1>{" "}
      {/* Page title */}
      <nav className="">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              to="/"
              className="text-gray-500 font-bold text-sm hover:text-primary"
            >
              Главная
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              <li key={index} className="text-secondary font-semibold">
                / {titles[name] || name}
              </li>
            ) : (
              <li key={index}>
                <Link to={routeTo} className="text-gray-500 hover:text-primary">
                  / {titles[name] || name}
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};
