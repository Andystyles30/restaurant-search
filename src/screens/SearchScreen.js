import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const RESULT_TYPES = [
  { name: 'Cost Effective', price: '£' },
  { name: 'Bit Pricier', price: '££' },
  { name: 'Big Spender', price: '£££' }
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
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage.length ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      {RESULT_TYPES.map((type, index) => (
        <ResultsList
          title={type.name}
          results={filterResultsByPrice(type.price)}
        />
      ))}
    </View>
  );
};

export default SearchScreen;
