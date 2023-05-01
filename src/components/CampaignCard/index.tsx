import React, { CSSProperties } from 'react';
import styles from './index.scss?inline';

interface ReviewsInfo {
    rating: number;
    count: number;
}

interface PriceInfo {
    price: number;
    originalPrice?: number;
    finalPriceOnSale?: number;
    premiumPrice?: number;
}

interface CampaignCardProps {
    title?: string;
    campaignType?: string;
    campaignText?: string;
    imageUrls?: string[];
    stock?: number;
    sku?: string;
    incentiveToBuyLabel?: string;
    valueAddedServiceLabel?: string;
    campaignLabel?: string;
    link?: string;
    status?: string;
    productName?: string;
    reviewsInfo?: ReviewsInfo;
    priceInfo?: PriceInfo;
    buttonText?: string;
    hasVariant?: boolean;
    productId?: string;
    style?: CSSProperties;
    variant?: string;
    custom?: any;
    [key: string]: any;
}

const CampaignCard: React.FC<CampaignCardProps> = (props) => {
    const {
        title,
        campaignType,
        campaignText,
        imageUrls,
        stock,
        sku,
        incentiveToBuyLabel,
        valueAddedServiceLabel,
        campaignLabel,
        link,
        status,
        productName,
        reviewsInfo,
        priceInfo,
        buttonText,
        hasVariant,
        productId,
        style,
        variant,
        custom = {},
        ...rest
    } = props;

    const cardStyle = {
        ...style,
        // Add any custom style properties here
    };

    const cardClass =
        variant === 'ProductOriented'
            ? styles.productOriented
            : styles.campaignOriented;

    return (
        <div className={`${styles.card} ${cardClass}`} style={{...style, ...cardStyle}} {...rest}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{priceInfo && priceInfo.price}</div>
            {sku && <div className={styles.sku}>SKU: {sku}</div>}
            {stock && <div className={styles.stockInfo}>Stock: {stock}</div>}
            <div className={styles.campaignText}>{campaignText}</div>
            <div className={styles.productName}>{productName}</div>
            {reviewsInfo && (
                <div className={styles.reviewsInfo}>
                    Rating: {reviewsInfo.rating}, Count: {reviewsInfo.count}
                </div>
            )}
            {priceInfo && (
                <div>
                    {priceInfo.originalPrice && (
                        <div className={styles.originalPrice}>
                            Original Price: {priceInfo.originalPrice}
                        </div>
                    )}
                    {priceInfo.finalPriceOnSale && (
                        <div className={styles.finalPriceOnSale}>
                            Final Price On Sale: {priceInfo.finalPriceOnSale}
                        </div>
                    )}
                    {priceInfo.premiumPrice && (
                        <div className={styles.premiumPrice}>
                            Premium Price: {priceInfo.premiumPrice}
                        </div>
                    )}
                </div>
            )}
            {buttonText && <button className={styles.button}>{buttonText}</button>}
        </div>
    );
};

export default CampaignCard;
