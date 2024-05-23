import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const CreateTodoPage = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const createTodo = async () => {
    await supabase.from('todos').insert([{ text, completed: false }]);
    navigate('/');
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Todo Text</FormLabel>
          <Input value={text} onChange={(e) => setText(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={createTodo}>Create Todo</Button>
      </VStack>
    </Box>
  );
};

export default CreateTodoPage;