import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    backgroundColor: '#ff4c79',
    height: '50%',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  userDetails: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  name: {
    fontSize: 24,
    color:'#fff',
    fontWeight: "700"
  },
  username: {
    color: '#fff'
  },
  profileCounts: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countWrapper: {
    alignItems: 'center'
  },
  textWhite: {
    color: '#fff'
  },
  detailSection: {

  },
options: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  height: 60
},
NewWrapper: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}
});
  