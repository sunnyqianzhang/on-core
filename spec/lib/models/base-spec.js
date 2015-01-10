// Copyright 2014, Renasar Technologies Inc.
/* jshint node: true */

'use strict';

module.exports = {
    before: function (callback) {
        before(function (done) {
            var context = this;

            helper.dropAndReinitialize().then(function (services) {
                callback(services, context);
                done();
            }).catch(function (error) {
                done(error);
            });
        });
    },
    after: function () {
        after(function () {
            return helper.closeWaterline();
        });
    },
    examples: function () {
        beforeEach(function () {
            expect(this.model).to.be.ok;
            expect(this.attributes).to.be.ok;
        });

        describe('Attributes', function () {
            describe('id', function () {
                beforeEach(function () {
                    this.subject = this.attributes.id;
                });

                it('should be a string', function () {
                    expect(this.subject.type).to.equal('string');
                });

                it('should be a primary key', function () {
                    expect(this.subject.primaryKey).to.equal(true);
                });

                it('should be auto increment', function () {
                    expect(this.subject.autoIncrement).to.equal(true);
                });

                it('should be unique', function () {
                    expect(this.subject.unique).to.equal(true);
                });
            });

            describe('createdAt', function () {
                beforeEach(function () {
                    this.subject = this.attributes.createdAt;
                });

                it('should be a datetime', function () {
                    expect(this.subject.type).to.equal('datetime');
                });
            });

            describe('updatedAt', function () {
                beforeEach(function () {
                    this.subject = this.attributes.updatedAt;
                });

                it('should be a datetime', function () {
                    expect(this.subject.type).to.equal('datetime');
                });
            });
        });

        describe('Class Methods', function () {
            describe('findByIdentifier', function () {
                it('should exist', function () {
                    expect(this.model.findByIdentifier).to.exist;
                });

                it('should be a function', function () {
                    expect(this.model).to.respondTo('findByIdentifier');
                });
            });

            describe('updateByIdentifier', function () {
                it('should exist', function () {
                    expect(this.model.findByIdentifier).to.exist;
                });

                it('should be a function', function () {
                    expect(this.model).to.respondTo('updateByIdentifier');
                });
            });

            describe('destroyByIdentifier', function () {
                it('should exist', function () {
                    expect(this.model.findByIdentifier).to.exist;
                });

                it('should be a function', function () {
                    expect(this.model).to.respondTo('destroyByIdentifier');
                });
            });

            describe('findOrCreateByIdentifier', function () {
                it('should exist', function () {
                    expect(this.model.findByIdentifier).to.exist;
                });

                it('should be a function', function () {
                    expect(this.model).to.respondTo('findOrCreateByIdentifier');
                });
            });

            describe('findMostRecent', function () {
                it('should exist', function () {
                    expect(this.model.findByIdentifier).to.exist;
                });

                it('should be a function', function () {
                    expect(this.model).to.respondTo('findMostRecent');
                });
            });
        });
    }
};