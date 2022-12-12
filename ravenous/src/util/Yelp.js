const apiKey = `JCf5V7BWoIdNzxL3TJXfAgLfrDAfUi-NsU1efF3gN9XBMqIStQEpw9s_OLsWrXOL0O1Jw5hZgPTVWoPmxH2MJjbhpza4QckK-PSUrQY5YgGLdLOLjBDz48c7ZuFOY3Yx`;
const Yelp = {
  async search(term, location, sortBy) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
            }));
        }
  }
};
export default Yelp;
