import React, { useState, useRef } from 'react';
import * as Chakra from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions';

const PostForm = () => {
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const btnRef = useRef();

  return (
    <>
      <Chakra.Button colorScheme="teal" onClick={() => setIsOpen(true)}>
        Create a Post
      </Chakra.Button>
      <Chakra.Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => setIsOpen(false)}
        finalFocusRef={btnRef}
      >
        <Chakra.DrawerOverlay>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(createPost(image, text));
              setImage('');
              setText('');
            }}
          >
            <Chakra.DrawerContent>
              <Chakra.DrawerCloseButton />
              <Chakra.DrawerHeader>Create a New Post</Chakra.DrawerHeader>

              <Chakra.DrawerBody>
                <Chakra.FormLabel>Post Image URL</Chakra.FormLabel>
                <Chakra.Input
                  placeholder="Type here..."
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                />
                <Chakra.FormLabel>Post Description</Chakra.FormLabel>
                <Chakra.Input
                  placeholder="Type here..."
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                />
              </Chakra.DrawerBody>

              <Chakra.DrawerFooter>
                <Chakra.Button
                  variant="outline"
                  mr={3}
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Chakra.Button>
                <Chakra.Button type="submit" color="blue">
                  Post
                </Chakra.Button>
              </Chakra.DrawerFooter>
            </Chakra.DrawerContent>
          </form>
        </Chakra.DrawerOverlay>
      </Chakra.Drawer>
    </>
  );
};

export default PostForm;
