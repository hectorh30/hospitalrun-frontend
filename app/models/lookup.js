import { Model } from 'ember-pouch';
import DS from 'ember-data';

export default Model.extend({
  // Temporarily store file as attachment until it gets uploaded to the server
  _attachments: DS.attr(),
  importFile: DS.attr('boolean', { defaultValue: false }),
  value: DS.attr(''),
  organizeByType: DS.attr('boolean'),
  userCanAdd: DS.attr('boolean')
});
