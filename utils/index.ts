import {
  AppsIcon,
  ChevronDown,
  ChevronRight,
  InvoicingIcon,
  LinkInBioIcon,
  MediaKitIcon,
  StoreIcon,
} from "../components/Icon";

export let USDollar = new Intl.NumberFormat("en-US", {
  currency: "USD",
  minimumFractionDigits: 2,
});

export const appmenuitems = [
  {
    label: "Link in Bio",
    sublabel: "Manage your link in bio",
    icon: LinkInBioIcon,
    route: "/apps/linkinbio",
  },
  {
    label: "Store",
    sublabel: "Manage your store activities",
    icon: StoreIcon,
    route: "/apps/store",
  },
  {
    label: "Media Kit",
    sublabel: "Manage your media kit",
    icon: MediaKitIcon,
    route: "/apps/mediakit",
  },
  {
    label: "Invoicing",
    sublabel: "Manage your link invoices",
    icon: InvoicingIcon,
    route: "/apps/invoicing",
  },
  {
    label: "Bookings",
    sublabel: "Manage your bookings",
    icon: LinkInBioIcon,
    route: "/apps/bookings",
  },
];
