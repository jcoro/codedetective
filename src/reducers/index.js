import {combineReducers} from 'redux';
import PagesReducer from './reducer_pages';
import ActivePage from './reducer_active_page';
import ChallengesReducer from './reducer_challenges';
import CompiledCodeReducer from './reducer_request_compiled_code';
import LanguageCodeReducer from './reducer_language_codes';
import EvidenceReducer from './reducer_evidence';
import ChallengeIndexReducer from './reducer_challenge_index';
import CodeReducer from './reducer_code';
import CompletedReducer from './reducer_completed';


const rootReducer = combineReducers({
    pages: PagesReducer,
    activePage: ActivePage,
    challenges: ChallengesReducer,
    compiledCodeObj: CompiledCodeReducer,
    fetchPostsIfNeeded: CompiledCodeReducer,
    languageCodes: LanguageCodeReducer,
    evidence: EvidenceReducer,
    challengeIndex: ChallengeIndexReducer,
    code: CodeReducer,
    completed: CompletedReducer,
});

export default rootReducer;