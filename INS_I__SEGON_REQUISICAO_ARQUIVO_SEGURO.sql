USE IT3020_INTEGRACAO 
GO
IF EXISTS (SELECT * FROM SYSOBJECTS SO WHERE SO.name = 'INS_I__SEGON_REQUISICAO_ARQUIVO_SEGURO' AND SO.type = 'P')
	BEGIN
		DROP PROC dbo.INS_I__SEGON_REQUISICAO_ARQUIVO_SEGURO
	END
GO
-- EXEC dbo.INS_I__SEGON_REQUISICAO_ARQUIVO_SEGURO
CREATE PROCEDURE dbo.INS_I__SEGON_REQUISICAO_ARQUIVO_SEGURO(@IdCotacao VARCHAR(15), @IdContrato VARCHAR(15), @NumProposta INT, @CodSeguradora VARCHAR(20))
AS
BEGIN
/*==============================================================================================================================================
-- ESTA PROCEDURE É UTILIZADO DO TIBCO 'TIB_SEGUROS'
-- PROCEURE QUE EFETUA A INCLUSAO DE APOLICES DA MITSUI EM UMA TABLA DE CONTROLE, DESDE QUE A MESMA AINDA NAO EXISTA
================================================================================================================================================*/
	SET NOCOUNT ON
	
	IF (SELECT COUNT(*) FROM I__SEGON_REQUISICAO_ARQUIVO_SEGURO WHERE IdCotacao = @IdCotacao AND IdContrato = @IdContrato AND CodSeguradora = @CodSeguradora) = 0 AND LEN(RTRIM(@IdCotacao)) > 0 AND LEN(RTRIM(@IdContrato)) > 0
		BEGIN
			INSERT INTO I__SEGON_REQUISICAO_ARQUIVO_SEGURO (IdCotacao, 
															IdContrato,
															NumProposta,
															NumRequisicao, 
															NumBorderoPaylink, 
															VlrLiberacao,
															DataPrimeiroEnvioAON, 
															DataUltimoEnvioAON, 
															DataPrimeiroEnvioMitsui, 
															DataUltimoEnvioMitsui, 
															IdPrimeiroArquivoAON, 
															IdPrimeiroArquivoMitsui, 
															IdUltimoArquivoAON, 
															IdUltimoArquivoMitsui, 
															FlgReenvioAON, 
															FlgReenvioMitsui,
															ContratoCancelado,
															DataStatusContrato,
															CodSeguradora)
			VALUES (@IdCotacao, @IdContrato, @NumProposta, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, 0, NULL,@CodSeguradora)
			
		END
	
	
END	
GO
GRANT EXECUTE ON INS_I__SEGON_REQUISICAO_ARQUIVO_SEGURO TO USERS_SYS 
