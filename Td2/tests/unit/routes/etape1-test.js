import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | etape1', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:etape1');
    assert.ok(route);
  });
});
