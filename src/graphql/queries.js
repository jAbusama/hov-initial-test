import { gql } from '@apollo/client';

export const getAllCountries = gql`
	query {
		countries {
			code
			name
			native
			phone
			capital
			currency
			continent {
				code
				name
			}
		}
	}
`;

export const getCountry = gql`
	query country($countryCode: ID!) {
		country(code: $countryCode) {
			code
			name
			native
			phone
			capital
			currency
			continent {
				code
				name
			}
			states {
				code
				name
			}
			languages {
				code
				name
				native
			}
		}
	}
`;

// export const getAllCharactersId = gql`
// 	query {
// 		characters {
// 			info {
// 				count
// 				pages
// 				next
// 				prev
// 			}
// 			results {
// 				id
// 			}
// 		}
// 	}
// `;

// export const getCharacterById = gql`
// 	query getCharacterById($charId: ID!) {
// 		character(id: $charId) {
// 			id
// 			name
// 			status
// 			species
// 			type
// 			gender
// 			origin {
// 				id
// 				name
// 				type
// 				dimension
// 			}
// 			location {
// 				id
// 				name
// 				type
// 				dimension
// 			}
// 			image
// 			created
// 			episode {
// 				id
// 				name
// 				air_date
// 				episode
// 			}
// 		}
// 	}
// `;
