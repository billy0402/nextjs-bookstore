import { useEffect, useMemo, useRef, useState } from 'react';

import {
  Box,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';

import CustomIcon from '@/components/CustomIcon';
import CustomIconBtn from '@/components/CustomIconBtn';
import type { FieldProps } from '@/components/Form/Field/models/field-config';

const Tags = ({
  watch,
  setValue,
  fieldConfig: { name, label, required, defaultValue, options },
}: FieldProps) => {
  const keywordRef = useRef<HTMLInputElement | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectableItems: any[] = useMemo(() => {
    return options ?? [];
  }, [options]);

  const [filteredItems, setFilteredItems] = useState<typeof selectableItems>(
    [],
  );

  const currentValue: any[] | undefined = watch(name) ?? defaultValue;

  useEffect(() => {
    if (!selectableItems) return;
    setFilteredItems(selectableItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectableItems]);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const keyword = keywordRef.current?.value ?? '';
    const filteredList = selectableItems.filter(
      (item) => item.id.includes(keyword) || item.name.includes(keyword),
    );

    setFilteredItems(filteredList);
  };

  const onSelect = (item: any) => {
    if (currentValue?.find((_item) => _item.id === item.id!)) {
      return;
    }
    const newValue = currentValue ?? [];
    newValue.push(item);
    setValue(name, newValue);
  };

  const onRemove = (item: any) => {
    let newValue = currentValue || [];
    newValue = newValue.filter((_item) => _item.id !== item.id);
    setValue(name, newValue.length ? newValue : null);
  };

  return (
    <Popover
      placement='bottom-end'
      isLazy
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <FormLabel htmlFor={name} marginBottom='2'>
        {label}
        <Text as='span' color='red'>
          {required && ' *'}
        </Text>
      </FormLabel>
      <Box
        as='section'
        display='flex'
        paddingInlineStart={4}
        color='text_sub'
        border='1px'
        borderColor='line'
        borderRadius='md'
      >
        <HStack spacing={4} flex='1'>
          {currentValue?.map((item) => (
            <Tag key={item.id} variant='solid' size='lg' borderRadius='full'>
              <TagLabel>{item.name}</TagLabel>
              <TagCloseButton onClick={() => onRemove(item)} />
            </Tag>
          ))}
        </HStack>

        <PopoverTrigger>
          <CustomIconBtn
            aria-label='搜尋'
            icon='advancedSearch'
            backgroundColor='accent_light'
            fontSize='3xl'
            height='48px'
            width='48px'
            borderLeft='1px'
            borderColor='line'
            borderStartRadius='unset'
          />
        </PopoverTrigger>
      </Box>

      <Portal>
        <Box position='relative' zIndex='popover' w='full' h='full'>
          <PopoverContent
            width='md'
            padding='2'
            borderColor='line'
            borderRadius='2xl'
            shadow='md'
          >
            <PopoverHeader>
              <form onSubmit={onSubmit}>
                <InputGroup as='label'>
                  <Input
                    ref={keywordRef}
                    id='keyword'
                    placeholder='請輸入關鍵字'
                    borderColor='line'
                    borderRadius='xl'
                  />
                  <InputRightElement as='section' width='48px'>
                    <CustomIconBtn
                      type='submit'
                      aria-label='搜尋'
                      icon='search'
                      backgroundColor='text_accent'
                      width='100%'
                      borderStartRadius='unset'
                    />
                  </InputRightElement>
                </InputGroup>
              </form>
              <Heading as='h4' fontSize='md' marginTop='sm'>
                {label}列表
              </Heading>
            </PopoverHeader>
            <PopoverBody as='article' maxHeight='300px' overflowY='auto'>
              <UnorderedList
                listStyleType='none'
                marginLeft='unset'
                display='flex'
                flexDirection='column'
                gap='sm'
              >
                {filteredItems.length ? (
                  filteredItems.map((item) => (
                    <ListItem
                      key={item.id}
                      display='inline-flex'
                      justifyContent='space-between'
                      alignItems='center'
                      color='text_sub'
                      fontSize='sm'
                      paddingX='5'
                      paddingY='3'
                      border='1px'
                      borderColor='line'
                      borderRadius='xl'
                      cursor='pointer'
                      onClick={() => {
                        onSelect(item);
                        onClose();
                      }}
                    >
                      {item.name}
                      <CustomIcon
                        name='personSelected'
                        fontSize='1.75rem'
                        color='accent_light'
                        margin='-1'
                      />
                    </ListItem>
                  ))
                ) : (
                  <ListItem>沒有相符項目</ListItem>
                )}
              </UnorderedList>
            </PopoverBody>
          </PopoverContent>
        </Box>
      </Portal>
    </Popover>
  );
};

export default Tags;
