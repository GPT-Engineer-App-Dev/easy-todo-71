import { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { supabase } from '../supabaseClient';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodoPage = () => {
  const { id } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodo();
  }, [id]);

  const fetchTodo = async () => {
    const { data } = await supabase.from('todos').select('*').eq('id', id).single();
    setText(data.text);
  };

  const updateTodo = async () => {
    await supabase.from('todos').update({ text }).eq('id', id);
    navigate('/');
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Todo Text</FormLabel>
          <Input value={text} onChange={(e) => setText(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={updateTodo}>Update Todo</Button>
      </VStack>
    </Box>
  );
};

export default EditTodoPage;