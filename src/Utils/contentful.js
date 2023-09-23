import gql from "graphql-tag";
import apolloClient from "./apollo-client";

export async function getAllMemberCard(state) {

  const { data } = await apolloClient.query({
    query: gql`
     {
      memberCardCollection(where: {
        OR: [
          { memberName_contains: "${state}" },
        ],
      }) {
        items {
          profilePicture {
            url
          }
          memberName
          industry
          companyName
          email
          phoneNumber
          websiteLink
          facebookLink
          instagramLink
          linkdInLink
        }
      }
    }
  `,
    variables: {
      state: state,
    },
  });
  return data.memberCardCollection.items;
}

export default getAllMemberCard;


