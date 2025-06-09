<View>
  <Text>Hi</Text>
  <Text>There</Text>
</View>

import { View, Text } from 'react-native';

export default function Greeting() {
    const firstName = "Narendra";
    const lastName = "Kumar";
    return (
        <View>
            <Text>Hi</Text>
            <Text>{firstName+lastName}</Text>
            <Text>{2 + 2}</Text>
        </View>
    );
}

export default function App() {
    return (
        <View>
            <Header />
            <MainArea />
            <Footer />
        </View>
    );
}
