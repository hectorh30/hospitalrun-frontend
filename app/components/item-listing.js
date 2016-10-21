import Ember from 'ember';
import PagingActions from 'hospitalrun/mixins/paging-actions';

export default Ember.Component.extend(PagingActions, {
  paginationProps: null,
  classNames: ['panel', 'panel-primary']
});
