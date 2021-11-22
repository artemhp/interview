import React from 'react';

import PropTypes from 'prop-types';

function SearchResult({ items }) {

     /**
     * Function for putting not active items to the end of the list
     *
     * @memberof Home
     * @param items [Array] - list of items from API
    */
    const notActiveToTheEnd = (items) => {
        return [
            ...items.filter(el => el.isActive === 'true'),
            ...items.filter(el => el.isActive === 'false'),
        ];
    }

     /**
     * Renders the list of result on search.
     *
     * @returns JSX
     * @memberof SearchResult
    */
    return (
        items && notActiveToTheEnd(items).map(({ name, price, picture, about, tags, isActive, _id }) => (
            <article
                className={
                isActive === 'true'
                    ? 'search-result-item'
                    : 'search-result-item search-result-item-not-active'
                }
                key={_id}
            >
                <h2 className='search-result-item-title'>{name}</h2>
                <div className='search-result-item-price'>{price}</div>
                <div className='search-result-item-image'>
                <img src={picture} alt='' />
                </div>

                <p className='search-result-item-description'>{about}</p>
                <div className='search-result-item-tags'>
                {tags.map((value) => (
                    <span key={value} className='search-result-item-tags-item'>
                    {value}
                    </span>
                ))}
                </div>
            </article>
        ))
    );
}

SearchResult.propTypes = {
  items: PropTypes.array,
};

module.exports = SearchResult;