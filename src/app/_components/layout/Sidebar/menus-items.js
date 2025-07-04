import { useTranslation } from "react-i18next";

export function getMenus() {
  const { t } = useTranslation();
  return [
    {
      label: t("Home"),
      children: [
        {
          path: "/",
          label: t("Sample Page"),
          icon: "sample",
        },
        {
          path: "/dashboard/products",
          label: t("Products Page"),
          icon: "sample",
        },
      ],
    },
  ];
}
