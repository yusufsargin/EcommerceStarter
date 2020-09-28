import { Breadcrumb } from "antd";
import { ICategoryItem } from "pages/views/product/[id]";
import React from "react";

export interface IBreadCrumbProps {
  breadcrumb: ICategoryItem[];
}

export default function BreadcrumbContainer({ breadcrumb }: IBreadCrumbProps) {
  return (
    <div>
      {breadcrumb && (
        <Breadcrumb className='py-2'>
          <Breadcrumb.Item>
            <a href='/'>Home</a>
          </Breadcrumb.Item>
          {breadcrumb.map((category: ICategoryItem, index: number) => {
            return (
              <Breadcrumb.Item key={index}>
                <a href={category.href}>{category.category}</a>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      )}
    </div>
  );
}
