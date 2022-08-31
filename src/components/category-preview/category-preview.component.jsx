import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';

import { Link } from 'react-router-dom';

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <Title>
                <Link to={title}>{title.toUpperCase()}</Link>
            </Title>
            <Preview>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;