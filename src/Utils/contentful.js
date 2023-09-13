import gql from "graphql-tag";
import apolloClient from "./apollo-client";


export async function getAllMemberCard() {
  const { data } = await apolloClient.query({
    query: gql`
      query GetAllPosts {
      memberCardCollection{
      items{
      profilePicture{
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
  });
  return data.memberCardCollection.items;
}

export default getAllMemberCard;


