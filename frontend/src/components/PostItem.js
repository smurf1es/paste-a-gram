import React, { useEffect } from 'react';
import * as Chakra from '@chakra-ui/react';

const PostItem = ({
  post,
  loadingCred,
  userCred,
  loadingDelete,
  _deleteHandler,
}) => {
  useEffect(() => {
    if (!post) {
      return <div />;
    }
  }, [post]);

  return (
    <>
      <Chakra.Box
        w="100%"
        d="flex"
        alignItems="center"
        flexDir={['column', 'row', 'row']}
        marginBottom="8"
        key={post._id}
      >
        <Chakra.Box mb={['4', '0', '0']} width={['150px', '175px', '200px']}>
          <Chakra.Image
            boxSize="200px"
            sizes={['150px', '175px', '200px']}
            objectFit="cover"
            src={post.image}
          />
        </Chakra.Box>
        <Chakra.Box
          mx={['0', '6', '8']}
          mb={['6', '0', '0']}
          textAlign={['left', 'center', 'center']}
          width={['150px', '150px', '200px']}
        >
          <p>{post.text}</p>
        </Chakra.Box>
        {!loadingCred && post.user === userCred._id && (
          <Chakra.Box d="flex" justifyContent="center" width="75px">
            <Chakra.Button
              colorScheme="red"
              isLoading={loadingDelete}
              onClick={() => _deleteHandler(post._id)}
              spinner={<Chakra.Spinner size={8} color="white" />}
            >
              Remove
            </Chakra.Button>
          </Chakra.Box>
        )}
      </Chakra.Box>
    </>
  );
};

export default PostItem;
