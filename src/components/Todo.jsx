import { Flex, Checkbox, Text, IconButton } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <Flex p={4} borderWidth={1} borderRadius="md" align="center" justify="space-between">
      <Checkbox isChecked={todo.completed} onChange={() => toggleComplete(todo.id, todo.completed)}>
        <Text as={todo.completed ? 'del' : ''}>{todo.text}</Text>
      </Checkbox>
      <Flex>
        <IconButton as={Link} to={`/edit/${todo.id}`} icon={<FaEdit />} mr={2} />
        <IconButton icon={<FaTrash />} onClick={() => deleteTodo(todo.id)} />
      </Flex>
    </Flex>
  );
};

export default Todo;