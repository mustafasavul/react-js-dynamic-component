import React from 'react';
import './index.scss';
import { CampaignCardProps } from './props';

const CampaignCard: React.FC<CampaignCardProps> = ({
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
                                                   }) => {
  const cardClass = variant === 'ProductOriented' ? 'productOriented' : 'campaignOriented';

  return (
      <div className={`card ${cardClass}`} style={style} {...rest}>
        <div className="title">{title}</div>
        <div className="price">{priceInfo?.price}</div>
        {sku && <div className="sku">SKU: {sku}</div>}
        {stock && <div className="stockInfo">Stock: {stock}</div>}
        <div className="campaignText">{campaignText}</div>
        <div className="productName">{productName}</div>
        {reviewsInfo && (
            <div className="reviewsInfo">
              Rating: {reviewsInfo.rating}, Count: {reviewsInfo.count}
            </div>
        )}
        {priceInfo && (
            <div>
              {priceInfo.originalPrice && (
                  <div className="originalPrice">Original Price: {priceInfo.originalPrice}</div>
              )}
              {priceInfo.finalPriceOnSale && (
                  <div className="finalPriceOnSale">
                    Final Price On Sale: {priceInfo.finalPriceOnSale}
                  </div>
              )}
              {priceInfo.premiumPrice && (
                  <div className="premiumPrice">Premium Price: {priceInfo.premiumPrice}</div>
              )}
            </div>
        )}
        {buttonText && <button className="button">{buttonText}</button>}
      </div>
  );
};

export default CampaignCard;
