import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    backgroundColor: '#282c34',
    borderRadius: 25,
    borderWidth: 0,
    borderColor: '#B7C3D0',
    shadowColor: '#B7C3D0',
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '100',
    color: '#E0E5EC',
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 75,
    letterSpacing: 1,
    textShadowColor: '#B7C3D0',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 1,
  },
});

export default styles;
