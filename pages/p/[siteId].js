import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import { useRef } from "react";

export async function getStaticProps(context) {
  const [siteId, route] = context.params.siteId;
  const feedback = await getAllFeedback(siteId, route);

  const site = getAllSites(siteId);

  if (!feedback) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      initialFeedback: feedback,
      site,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      site: [site.id.toString()],
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

const FeedbackPage = ({ initialFeedback }) => {
  const auth = useAuth();
  const inputEl = useRef();

  return (
    <Box display="flex" w="full" flexDir="column" maxW="700px" margin="0 auto">
      {auth.user && (
        <Box as="form">
          <FormControl my={8}>
            <FormLabel htmlFor="comment">Comment</FormLabel>
            <Input ref={inputEl} id="comment" placeholder="Leave a comment" />
            <Button mt={4} type="submit" fontWeight="medium">
              Add Comment
            </Button>
          </FormControl>
        </Box>
      )}
      // only render the feedback if it exists
      {initialFeedback &&
        initialFeedback.map((feedback) => (
          <Feedback key={feedback.id} {...feedback} />
        ))}
    </Box>
  );
};

export default FeedbackPage;
