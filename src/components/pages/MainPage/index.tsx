import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import React, { useState } from 'react';
import Footer from 'src/components/common/Footer';
import ProductItem from 'src/components/common/ProductItem';
import { MainPageAppBarLeft, MainPageAppBarRight } from 'src/components/common/Stackflow';
import { ProductInterface } from 'src/schemas/Product';
import { getProductList } from 'src/services/product';
import { useFlow } from 'src/utils/stackflow';
import { ItemsWrapper } from './styled';

const MainPage: ActivityComponentType = () => {
  const [products, setProducts] = React.useState<ProductInterface[]>([]);
  const loadProducts = async () => {
    const { data } = await getProductList();
    setProducts(data);
  };
  const { push } = useFlow();
  const goToDetailPage = (id: number) => {
    push('DetailPage', { id: id.toString() });
  };
  React.useEffect(() => {
    loadProducts();
  }, []);
  return (
    <AppScreen appBar={{ appendLeft: MainPageAppBarLeft, appendRight: MainPageAppBarRight }}>
      <div>ss</div>
      <ItemsWrapper>
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              item={product}
              onClickItem={() => {
                goToDetailPage(product.id);
              }}
            ></ProductItem>
          );
        })}
      </ItemsWrapper>
      <Footer></Footer>
    </AppScreen>
  );
};

export default MainPage;
