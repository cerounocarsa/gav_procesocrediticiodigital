require('dotenv').config({ path:__dirname+'/./../../.env' });

const camelcaseKeys = require('camelcase-keys');

const {selectPERFIC} = require('../helpers/sql_select');
const {jsonBody}    = require('../utils/_json');
const {errorBody}   = require('../utils/_json');

    const getPersonaCuenta = (apiREQ, apiRES) => {
        let _code       = 200;
        let _dataJSON   = [];
        let _codigo     = parseInt(apiREQ.params.codigo);

        if (_codigo != 'undefined' && _codigo > 0){

            (async () => {
                const xDATA = await selectPERFIC(1, _codigo);
                _code       = xDATA[0];
                _dataJSON   = xDATA[1];
        
                if (_code == 200) {
                    _dataJSON = await jsonBody(_code, 'Success', null, null, null, 0, 0, 0, 0, _dataJSON);

                } else if (_code == 404){
                    _dataJSON   = xDATA[1];
                    _dataJSON   = await jsonBody(_code, 'No hay registros', null, null, null, 0, 0, 0, 0, []);
                }else{
                    _dataJSON   = xDATA[1];
                    _dataJSON   = await jsonBody(_code, 'Error', null, null, null, 0, 0, 0, 0, []);
                }
        
                //_dataJSON = camelcaseKeys(_dataJSON, {deep: true});
        
                return apiRES.status(200).json(_dataJSON);
            })();

        }else{
            (async () => {
                _code       = 400;
                _dataJSON   = await errorBody(_code, 'Verifique, algún campo esta vacio.', true);

                return apiRES.status(200).json(_dataJSON);
            })();
            
        }
    }

    const getPersonaDatoParticular = (apiREQ, apiRES) => {
        let _code       = 200;
        let _dataJSON   = [];
        let _codigo     = parseInt(apiREQ.params.cuenta);

        if (_codigo != 'undefined' && _codigo > 0){

            (async () => {
                const xDATA = await selectPERFIC(2, _codigo);
                _code       = xDATA[0];
                _dataJSON   = xDATA[1];
        
                if (_code == 200) {
                    _dataJSON = await jsonBody(_code, 'Success', null, null, null, 0, 0, 0, 0, _dataJSON);

                } else if (_code == 404){
                    _dataJSON   = xDATA[1];
                    _dataJSON   = await jsonBody(_code, 'No hay registros', null, null, null, 0, 0, 0, 0, []);
                }else{
                    _dataJSON   = xDATA[1];
                    _dataJSON   = await jsonBody(_code, 'Error', null, null, null, 0, 0, 0, 0, []);
                }
        
                //_dataJSON = camelcaseKeys(_dataJSON, {deep: true});
        
                return apiRES.status(200).json(_dataJSON);
            })();

        }else{
            (async () => {
                _code       = 400;
                _dataJSON   = await errorBody(_code, 'Verifique, algún campo esta vacio.', true);

                return apiRES.status(200).json(_dataJSON);
            })();
            
        }
    }
    
    const getPersonaCuentaDatoLaboral = (apiREQ, apiRES) => {
        let _code       = 200;
        let _dataJSON   = [];
        let _codigo     = parseInt(apiREQ.params.cuenta);

        if (_codigo != 'undefined' && _codigo > 0){

            (async () => {
                const xDATA = await selectPERFIC(3, _codigo);
                _code       = xDATA[0];
                _dataJSON   = xDATA[1];
        
                if (_code == 200) {
                    _dataJSON = await jsonBody(_code, 'Success', null, null, null, 0, 0, 0, 0, _dataJSON);

                } else if (_code == 404){
                    _dataJSON   = xDATA[1];
                    _dataJSON   = await jsonBody(_code, 'No hay registros', null, null, null, 0, 0, 0, 0, []);
                }else{
                    _dataJSON   = xDATA[1];
                    _dataJSON   = await jsonBody(_code, 'Error', null, null, null, 0, 0, 0, 0, []);
                }
        
                //_dataJSON = camelcaseKeys(_dataJSON, {deep: true});
        
                return apiRES.status(200).json(_dataJSON);
            })();

        }else{
            (async () => {
                _code       = 400;
                _dataJSON   = await errorBody(_code, 'Verifique, algún campo esta vacio.', true);

                return apiRES.status(200).json(_dataJSON);
            })();
            
        }
    }


module.exports  = {
    getPersonaCuenta,
    getPersonaDatoParticular,
    getPersonaCuentaDatoLaboral
}