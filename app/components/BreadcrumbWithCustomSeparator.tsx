import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

type BreadcrumbItemType = {
  label: string;
  href?: string;
};

type BreadcrumbWithCustomSeparatorProps = {
  items: BreadcrumbItemType[];
};

const BreadcrumbWithCustomSeparator = ({ items }: BreadcrumbWithCustomSeparatorProps) => (
  <Breadcrumb>
    <BreadcrumbList>
      {items.map((item, idx) => (
        <span key={item.label} className="flex items-center">
          <BreadcrumbItem>
            {item.href ? (
              <BreadcrumbLink
                href={item.href}
                className="text-white hover:text-amber-300 transition-colors"
              >
                {item.label}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {idx < items.length - 1 && <BreadcrumbSeparator />}
        </span>
      ))}
    </BreadcrumbList>
  </Breadcrumb>
);

export default BreadcrumbWithCustomSeparator;