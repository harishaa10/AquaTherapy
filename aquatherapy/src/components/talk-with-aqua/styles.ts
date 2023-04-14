import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C', // background color changed to dark gray
  },
  chatBox: {
    flexGrow: 1,
    padding: 10,
  },  
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2C', // background color changed to darker gray
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: '#3C3C3C', // border color changed to even darker gray
  },
  chatInput: {
    flex: 1,
    backgroundColor: '#3C3C3C', // background color changed to even darker gray
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    color: '#FFFFFF', // text color changed to white
  },
  sendButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  messageContainer: {
    backgroundColor: '#2C2C2C', // background color changed to darker gray
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  messageText: {
    color: '#FFFFFF', // text color changed to white
    fontSize: 16,
    lineHeight: 24,
  },
  aquaMessageContainer: {
    backgroundColor: '#3B82F6',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  aquaMessageText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
  },
});
