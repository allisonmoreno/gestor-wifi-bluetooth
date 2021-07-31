import { StyleSheet, Platform } from 'react-native';

// MyriadPro-Black
// MyriadPro-BlackIt
// MyriadPro-Bold
// MyriadPro-BoldIt
// MyriadPro-It
// MyriadPro-Light
// MyriadPro-LightIt
// MyriadPro-Regular
// MyriadPro-Semibold
// MyriadPro-SemiboldIt
// UltimaPro-Bold
// UltimaPro-BoldItalic
// UltimaPro-Italic
// UltimaPro
// UltimaProBlack-BlackItalic
// UltimaProBlack
// UltimaProLt-Italic
// UltimaProLt
export default StyleSheet.create({
    container: {
        flex: 1
    },
    navigatorContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor:'rgba(0, 8, 49, 0.7)'
    },
    navigator: {
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 0
    },
    scrollView: {
        marginTop: -20,
        marginHorizontal: 0,
        paddingTop: 10
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 0,
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        paddingHorizontal: 20,
        paddingVertical: 18,
    },
    cardTotales: {
        backgroundColor: '#fff',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        borderWidth: 0,
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        paddingHorizontal: 40,
        paddingVertical: 20,
        marginHorizontal: 0,
        marginTop: 20, 
        paddingBottom: 80,
    },
    cardTitle: {
        fontSize:22,
        color: '#4D4E5A',
        fontFamily: 'MyriadPro-Semibold',
    },
    cardSelected: {
        ...Platform.select({
            ios: {
                shadowColor: '#89D6A8',
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.8,
                shadowRadius: 10,

                elevation: 0
            },
            android: {
                borderColor: '#89D6A8',
                borderWidth: 1
            }
        })
    },
    text: {
        fontFamily: 'MyriadPro-Regular',
        color: '#4e4f5a',
        paddingBottom: 5,
        marginLeft: 10,
        marginRight: 10
    },
    divider: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 5,
        marginBottom: 10,
    },
    black: {
        color: '#605152'
    },
    bold: {
        fontFamily: 'MyriadPro-Bold'
    },
    semibold: {
        fontFamily: 'MyriadPro-Semibold'
    },
    regular: {
        fontFamily: 'MyriadPro-Regular'
    },
    size1: {
        fontSize: 18,
        lineHeight: 22
    },
    size2: {
        fontSize: 20,
        lineHeight: 22
    },
    size3: {
        fontSize: 22,
        lineHeight: 22
    },
    cardSmallTitle: {
        color: '#4D4E5A',
        fontSize: 20,
        fontFamily: 'MyriadPro-Bold',
        textAlign: 'left'
    },
    cardSubtitle: {
        color: '#4e4f5a',
        fontSize: 16,
        fontFamily: 'MyriadPro-Semibold',
        textAlign: 'left',
        paddingBottom: 5,
        marginLeft: 10,
        marginRight: 10
    },
    headerContainer: {
        height: 170
    },
    headerText: {
        color: '#fff',
        paddingBottom: 20
    },
    header: {
        borderWidth: 0
    },
    image: {
        flex: 1,
        height: 250,
        resizeMode: 'cover'
    },
    imageSecondary: {
        flex: 1,
        height: 150,
        resizeMode: 'cover',
        justifyContent: "center",
    },
    pickerHome: {
        zIndex: 1,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginBottom: 12,
        marginTop: -10,
        marginHorizontal: 12,
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
    modalContainer:{
       flex:1,
       alignItems:'center',
       paddingTop:20,
       paddingHorizontal: 10
    },
    modalTitulo:{
       fontSize:24,
       lineHeight: 38,
       color:'#4D4E5A',
       alignItems:'center',
       paddingTop:20,
       fontFamily:'MyriadPro-Bold'
    },
    modalMensaje:{
       fontSize:22,
       lineHeight: 36,
       color:'#4D4E5A',
       alignItems:'center',
       textAlign: 'center',
       paddingTop:40,
       paddingBottom:0,
       fontFamily:'MyriadPro-Light'
    },
    modalDescripcion:{
       fontSize:26,
       lineHeight:40,
       color:'#4D4E5A',
       alignItems:'center',
       paddingTop:40,
       paddingBottom:0,
       fontFamily:'MyriadPro-Bold',
       textAlign:'center'
    },
    modalError:{
       fontSize:20,
       lineHeight:26,
       color:'#4D4E5A',
       alignItems:'center',
       paddingTop:40,
       paddingBottom:0,
       fontFamily:'MyriadPro-Bold',
       textAlign:'center'
    },
    modalBtnContainer:{
       flex:1,
       alignItems:'center',
       flexDirection:'row'
    },
    modalConfirmarTitulo:{
       width:300,
       fontSize:22,
       color:'#4D4E5A',
       textAlign:'center',
       alignItems:'center',
       paddingTop:40,
       paddingBottom:0,
       fontFamily:'MyriadPro-Light'
    },
    modalConfirmarMensaje:{
       fontSize:22,
       color:'#4D4E5A',
       alignItems:'center',
       paddingTop:30,
       fontFamily:'MyriadPro-Bold'
    },
    navigation: {   
        height:100,
        overflow:'hidden',
        backgroundColor:'#C3313C'
    },
    navigationAlt: { 
        backgroundColor:'#F0F0F4'
    },
    navigationSucursal: {   
        height:140,
    },
    navigationTitle:{
        color: '#fff',
        fontSize: 20,
        fontFamily: 'UltimaPro-Bold',
        textAlign: 'center',
        marginLeft: 0,
        lineHeight: 24,
        width:"100%",
        height: 22,
        marginTop:0,
        ...Platform.select({
            ios: {
                height:40,
            }
        })
    },
    navigationTitleAlt:{
        color: '#605152',
        fontSize: 18,
        fontFamily: 'MyriadPro-Regular',
        textAlign: 'left',
        marginLeft: 0,
        lineHeight: 24,
        width:"140%",
        height: 22,
        paddingRight: 20,
        marginTop:0
    },
    navigationTitleSearch:{
        marginTop:12,
        height:22,
        ...Platform.select({
            ios: {
                height:40
            }
        })
    },
    searchInputContainer:{
        width:"120%",
        height:40,
        marginTop: -3
    },
    searchInput:{
        color: '#fff',
        fontSize: 22,
        width:"100%",
        fontFamily: 'MyriadPro-Regular',
        height:44
    },
    navigationClienteSucursal:{
        fontFamily: 'MyriadPro-Regular',
        fontSize: 18,
        lineHeight: 22,
        color: '#fff'
    },
    itemView: {
        minHeight: 60,
        justifyContent: 'center',
        backgroundColor: "rgba(255,255,255,.2)",
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.2)'
    },
    itemTextBold: {
        color: '#4D4E5A',
        fontSize: 21,
        fontFamily: 'MyriadPro-Semibold',
        marginBottom: 10,
        marginLeft: 5
    },
    itemText: {
        color: '#4D4E5A',
        fontSize: 20,
        lineHeight: 26,
        fontFamily: 'MyriadPro-Light',
        marginBottom: 10,
        marginLeft: 5
    },
    input:{
        fontFamily:'MyriadPro-Regular',
        color: '#4D4E5A',
        fontSize: 20,
        lineHeight: 26,
        margin:0,
        padding:0,
        height: 48,
    },
    inputMultiline:{
        fontFamily:'MyriadPro-Regular',
        color: '#4D4E5A',
        fontSize: 20,
        lineHeight: 26,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#D4D5DE',
        paddingVertical:20,
        paddingHorizontal:20,
        height:90,
    },
    inputMultilineModal:{height: 200, fontSize: 20, borderColor: '#707070', borderRadius: 10, paddingVertical: 12, fontFamily: 'MyriadPro-Light', backgroundColor: '#FFFFFF'},
    inputMultilineContainer:{marginHorizontal:0, paddingHorizontal:0, paddingVertical:0},
    inputContainer:{margin:0, padding:0,marginBottom:20, height:48},
    inputError:{ color: '#DE6871',fontSize:13, fontFamily: 'MyriadPro-Light', marginLeft: -1},
    inputContainerStyle: { borderBottomColor: '#d4d5de' },
    inputErrorContainerStyle: { borderBottomColor: '#DE6871' },
    inputFocused: {
        borderBottomColor: '#4d4e5a',
        color: '#4d4e5a'
    },
    picker: {
        borderBottomWidth: 1,
        borderBottomColor: '#D4D5DD',
        margin:0, padding:0,marginBottom:10, height:48
    },
    drawerItem:{
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'UltimaPro',
    },
    tableHeader: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 'auto'
    },
    tableHeaderTxt: {
        color: '#74B0F5',
        fontFamily: 'MyriadPro-Semibold',
        fontSize: 16,
        flex: 2,
        textAlign: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
    },
    tableSeparator: {
        borderColor: '#D4D5DE',
        borderBottomWidth: 1.5,
        marginVertical: 15
    },
    productoCodigo:{ color: '#DE6871', fontFamily: 'MyriadPro-Light', fontSize: 16, lineHeight: 22, marginBottom: 5 },
    productoNombre:{ color: '#4D4E5A', fontFamily: 'MyriadPro-Semibold', fontSize: 16, lineHeight: 22 },
    productoCantidad:{ flex: 1, textAlign: 'center', color: '#4D4E5A', fontFamily: 'UltimaPro', fontSize: 18, lineHeight: 20 },
});
