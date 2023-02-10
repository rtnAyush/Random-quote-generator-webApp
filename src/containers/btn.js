import Btn from "../components/Btn";
import { connect } from "react-redux";
import { getNewQuote } from "../store/actions";

const mapStateToProps = state => ({
    data: state
})

const mapDispatchToProps = dispatch => ({
    getNewQuote: data => dispatch(getNewQuote)
})

export default connect(mapStateToProps, mapDispatchToProps)(Btn)