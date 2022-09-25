import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { TodosQueryProvider } from '@acima/ui-providers';
import { TodosPage } from './pages';

const theme = extendTheme({
  colors: {
    brand: {
      600: '#1a91ff'
    }
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'md'
      },
      defaultProps: {
        colorScheme: 'red'
      }
    },
    Checkbox: {
      defaultProps: {
        borderWidth: 1,
        borderRadius: 'xl',
        colorScheme: 'brand',
        size: 'md'
      }
    }
  }
});

export const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <TodosQueryProvider>
          <SafeAreaView>
            <TodosPage />
            <StatusBar style="auto" />
          </SafeAreaView>
        </TodosQueryProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};
