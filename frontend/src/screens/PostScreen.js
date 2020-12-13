import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Chakra from '@chakra-ui/react';
import { listPosts, deletePost } from '../actions/postActions';
import { POST_CREATE_RESET } from '../constants/postConstants';
import PostForm from '../components/PostForm';
import PostItem from '../components/PostItem';

const PostScreen = () => {
  const [close, setClose] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userCred, loading: loadingCred } = userLogin;

  const postList = useSelector((state) => state.postList);
  const { loading: loadingList, error: errorList, posts } = postList;

  const postCreate = useSelector((state) => state.postCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = postCreate;

  const postDelete = useSelector((state) => state.postDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = postDelete;

  const _deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deletePost(id));
    }
  };

  const _closeHandler = () => {
    setClose(true);
  };

  useEffect(() => {
    dispatch(listPosts());
    dispatch({ type: POST_CREATE_RESET });

    if (!userCred) {
      history.push('/login');
    }
  }, [dispatch, successCreate, successDelete, history, userCred]);

  return (
    <>
      <Chakra.Box display="flex" flexDir="column">
        {successCreate && !close && (
          <Chakra.Alert status="success">
            <Chakra.AlertIcon />
            <Chakra.Box flex="1">
              <Chakra.AlertTitle>Success!</Chakra.AlertTitle>
              <Chakra.AlertDescription display="block">
                Your post has been created!
              </Chakra.AlertDescription>
            </Chakra.Box>
            <Chakra.CloseButton
              onClick={_closeHandler}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Chakra.Alert>
        )}
        {successDelete && !close && (
          <Chakra.Alert status="success">
            <Chakra.AlertIcon />
            <Chakra.Box flex="1">
              <Chakra.AlertTitle>Success!</Chakra.AlertTitle>
              <Chakra.AlertDescription display="block">
                Your post has been deleted!
              </Chakra.AlertDescription>
            </Chakra.Box>
            <Chakra.CloseButton
              onClick={_closeHandler}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Chakra.Alert>
        )}
        {errorCreate && !close && (
          <Chakra.Alert status="success">
            <Chakra.AlertIcon />
            <Chakra.Box flex="1">
              <Chakra.AlertTitle>Error!</Chakra.AlertTitle>
              <Chakra.AlertDescription display="block">
                Your post could not be created.
              </Chakra.AlertDescription>
            </Chakra.Box>
            <Chakra.CloseButton
              onClick={_closeHandler}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Chakra.Alert>
        )}
        {errorDelete && !close && (
          <Chakra.Alert status="success">
            <Chakra.AlertIcon />
            <Chakra.Box flex="1">
              <Chakra.AlertTitle>Error!</Chakra.AlertTitle>
              <Chakra.AlertDescription display="block">
                Your post could not be deleted.
              </Chakra.AlertDescription>
            </Chakra.Box>
            <Chakra.CloseButton
              onClick={_closeHandler}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Chakra.Alert>
        )}
        <Chakra.Box d="flex" justifyContent="center" mb="6">
          <PostForm />
        </Chakra.Box>
        {!loadingList &&
          !loadingCreate &&
          !errorList &&
          posts.map((post) => (
            <PostItem
              post={post}
              userCred={userCred}
              loadingCred={loadingCred}
              loadingDelete={loadingDelete}
              _deleteHandler={_deleteHandler}
            />
          ))}
      </Chakra.Box>
    </>
  );
};

export default PostScreen;
