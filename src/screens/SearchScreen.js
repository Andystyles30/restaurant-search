import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const RESULT_TYPES = [
  { id: 1, name: 'Cost Effective', price: '£' },
  { id: 2, name: 'Bit Pricier', price: '££' },
  { id: 3, name: 'Big Spender', price: '£££' }
];

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === '£' || '££' || '£££'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage.length ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        {RESULT_TYPES.map((type, index) => (
          <ResultsList
            key={type.id}
            title={type.name}
            results={filterResultsByPrice(type.price)}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default SearchScreen;
